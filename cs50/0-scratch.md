# Scratch

**Computer Science (CS)** - the study of information.

**Unary** - involving a single element.

**Binary** - 2 digits, the language computers speak.

**Decimal System** - 10 digits, the number system that people use.

A **bit** is a `0` or a `1`, otherwise called a **binary digit**.

How do computers speak only in binary & base-2?

A computer contains millions of tiny switches known as transistors, which can toggle between ON and OFF states, representing the binary values `1` and `0`.

- `1` = on
- `0` = off

| Decimal |  0  |  1  |  2   |  3   |   4   |   5   |   6   |   7   |   8    |   9    |   10   |   15   |
| ------- | :-: | :-: | :--: | :--: | :---: | :---: | :---: | :---: | :----: | :----: | :----: | :----: |
| Binary  | `0` | `1` | `10` | `11` | `100` | `101` | `110` | `111` | `1000` | `1001` | `1010` | `1111` |

How high can a computer count with 8 bits? `11111111` = 255

To transition from the binary representation `111` to `1000`, an additional bit is required, which in a computer's hardware corresponds to an additional transistor.

In digital computing, data is structured in bytes, with one byte comprising 8 bits.

As data scales up, it's measured in kilobytes (thousands of bytes), megabytes (millions of bytes), and gigabytes (billions of bytes).

These measurements represent a vast number of **8-bit patterns**, each consisting of a unique combination of `0`s and `1`s, which are stored on your computer's hard drive.

<br>

### Text

How do computers represent letters using those patterns of `0`s and `1`s ?

Using a system that maps numbers to letters. For example the letter "A" is represented by the decimal number 65.

ASCII (American Standard Code for Information Interchange) - acronym describing a mapping between numbers and letters that starts at 65, 66, 67 for capital letters, and 97, 98, 99 for lowercase letters.

<br>

### Emoji

If ASCII used 8 bytes to represent lettres, ASCII can represent as many as 255 characters.

If we want to represent more characters, for example characters from another languages or even emoji, we can just add more bits.

The solution to ASCII is Unicode, Unicode is also a mapping of numbers to letters, but in many different languages.

If we use 32 bits to represent characters on a keyboard, that's 4 billion possible permutations.

`11110000100111111001100010000010` = 4036991106 = 😂

Note: emojis are not images, they're characters
