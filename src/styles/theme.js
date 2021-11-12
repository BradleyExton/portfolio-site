const colors = {
  green: "#24A148",
  purple: "#A2257F",
  white: "#FFFFFF",
  blue: "#5B7CFF",
  black: "#000000",
};

const theme = {
  colors: {
    primary: colors.green,
    secondary: colors.purple,
    background: colors.white,
    icons: colors.white,
    text: {
      primary: colors.green,
      secondary: colors.white,
      heading: colors.purple,
      paragraph: colors.black,
      link: colors.blue,
    },
    blobs: {
      primary: colors.green,
      secondary: colors.purple,
    },
  },
  borderRadius: "4px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  fontSize: {
    navLinks: "1.7rem",
    h2: "4.5rem",
    h3: "3.6rem",
    h4: "2.2rem",
    paragraph: "2.2rem",
  },
};

export default theme;
