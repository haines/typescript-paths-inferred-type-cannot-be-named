# Setting `paths` in `lib`'s tsconfig breaks `app`

We've got a multiproject build where `app` depends on `lib`.

`lib` exports a `client` function that creates a Connect RPC client from a service definition.

This compiles fine until we add a `paths` section to `lib`'s tsconfig, at which point `app`'s build fails with

```
app/src/client.ts:4:14 - error TS2742: The inferred type of 'example' cannot be named without a reference to '../../node_modules/@ahaines/lib/src/api/protobuf/example_pb.js'. This is likely not portable. A type annotation is necessary.

4 export const example = client(Service).example;
               ~~~~~~~
```

To see it in action, run

```console
$ npm install
$ npm run repro
```

To bisect it, I ran

```console
$ every-ts bisect start v5.4.2 v5.3.3
$ every-ts bisect run ./repro
```
