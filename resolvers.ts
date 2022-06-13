import { Resolvers } from "./.mesh";

const resolvers: Resolvers = {
  CQL_CartItem: {
    product: {
      selectionSet: /* */ `
        {
          id
        }
      `,
      resolve: async (root, args, context, info) =>
        await context.GraphCMS.Query.GCMS_product({
          root,
          context,
          info,
          args: {
            where: {
              id: root.id,
            },
          },
        }),
    },
  },
};

export default resolvers;
