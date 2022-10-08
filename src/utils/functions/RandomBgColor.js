const randomColors = (colors = ["cyan.600", "gray.600", "facebook.600", "green.600", "orange.600", "purple.600", "teal.600", "red.600"]) => {
  return colors[Math.floor(Math.random()*colors.length)]
}

export { randomColors }