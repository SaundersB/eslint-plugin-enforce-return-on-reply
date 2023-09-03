module.exports = {
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.object &&
          node.object.name === 'reply' &&
          node.property &&
          typeof node.property.name === 'string'
        ) {
          let parent = node.parent;
          while (parent) {
            if (parent.type === 'ReturnStatement') {
              return; // Found a 'return', no issues
            }
            if (
              parent.type === 'FunctionExpression' ||
              parent.type === 'FunctionDeclaration' ||
              parent.type === 'ArrowFunctionExpression'
            ) {
              // Reached function boundary without finding a return
              context.report({
                node,
                message: `The Fastify reply of type '${node.property.name}' should be returned.`,
              });
              return;
            }
            parent = parent.parent;
          }
        }
      },
    };
  },
};
