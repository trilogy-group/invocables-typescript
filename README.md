# Invocables in TypeScript runtime

Constraints to adding new invocables:

- Invocables must be added as a new directory in `src`
- The invocable directory must contain an `index.ts` as the starting point

## Testing the existing invocables using DevServer

### Testing echo invocable

Ensure that the current selected tab is `ECHO`.

- Input:

```json
{
  "event": {
    "input": {
      "message": "Hello world!"
    }
  },
  "context": {}
}
```

- Output:

```json
{ "message": "Hello world!" }
```

### Testing sleep invocable

Ensure that the current selected tab is `SLEEP`.

- Input:

```json
{
  "event": {
    "delayTime": 2000
  },
  "context": {}
}
```

- Output:

Output is returned after 2s delay

```json
{ "message": "Returned after a delay of 2000ms" }
```
