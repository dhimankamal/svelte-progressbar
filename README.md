# progressbar-svelte

**Description:** A Svelte package for customizable progress bars.

## Installation

You can install this package via npm:

```bash
npm install progressbar-svelte
```


## Usage

To use the `ProgressBar` component, import it into your Svelte file:

```html
<script lang="ts">
  import { ProgressBar } from "progressbar-svelte";
</script>

<ProgressBar color="red" />
<slot />
```

## Attributes

### `color`

- **Type:** String
- **Default:** `"red"`
- **Description:** Change the color of the progress bar by providing a valid CSS color value.

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md) before submitting pull requests.

## License

This package is licensed under the MIT License. See [LICENSE](LICENSE) for more details.

## Issues

If you encounter any issues with this package, please report them [here](link-to-issues).
