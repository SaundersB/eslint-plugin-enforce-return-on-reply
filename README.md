# eslint-plugin-enforce-return-on-reply

This ESLint plugin provides a rule to enforce that a return statement is used when utilizing Fastify's reply object.

## Installation

First, you'll need to install [ESLint](http://eslint.org):

```sh
npm install eslint --save-dev
```

Next, install `eslint-plugin-enforce-return-on-reply`:

```sh
npm install eslint-plugin-enforce-return-on-reply --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-enforce-return-on-reply` globally.

## Usage

Add `enforce-return-on-reply` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "enforce-return-on-reply"
    ]
}
```

Then configure the rule under the `rules` section.

```json
{
    "rules": {
        "enforce-return-on-reply/enforce-return-on-fastify-reply": "error"
    }
}
```

## Supported Rules

* `enforce-return-on-fastify-reply`: Enforces the use of a return statement when utilizing Fastify's reply object.

## Example

With this rule, the following code would result in an error:

```javascript
fastify.get('/', async (request, reply) => {
    reply.code(200).send({ hello: 'world' });
});
```

A valid example:

```javascript
fastify.get('/', async (request, reply) => {
    return reply.code(200).send({ hello: 'world' });
});
```

## Contributing

Feel free to open issues or PRs!
