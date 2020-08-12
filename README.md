# node-red-contrib-ulid

A simple Node-RED node that appends ULID to the input message.

## What's ULID?

Quoted by [ulid/spec](https://github.com/ulid/spec):

- 128-bit compatibility with UUID
- 1.21e+24 unique ULIDs per millisecond
- Lexicographically sortable!
- Canonically encoded as a 26 character string, as opposed to the 36 character UUID
- Uses Crockford's base32 for better efficiency and readability (5 bits per character)
- Case insensitive
- No special characters (URL safe)
- Monotonic sort order (correctly detects and handles the same millisecond)

Learn more, see the [ulid/spec](https://github.com/ulid/spec) repository.

## Installation

Install via the Palette Manager or from within your node-red directory (typically `~/.node-red`) run:

```
npm i node-red-contrib-ulid
```

## Usage

The node appends ULID to `msg.ulid` of the input message. 
