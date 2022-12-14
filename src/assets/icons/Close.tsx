type Props = {
  height?: number | string
  width?: number | string
  fill?: string
  stroke?: string
}
const Svg = (props: Props) => {
  const { height, width, stroke = 'currentColor', fill = 'currentColor' } = props
  return (
    <svg
      string={stroke}
      fill={fill}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g data-name="Layer 2">
        <path
          d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
          data-name="close"
        />
      </g>
    </svg>
  )
}

export default Svg
