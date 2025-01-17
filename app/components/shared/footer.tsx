const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-8 lg:px- text-center pb-8 pt-24 text-sm">
      <p>
        &copy; {currentYear}{" "}
        <span className="font-pacifico inline-block">PhotoSearch</span> |
        Xanotech API Integration Assessment
      </p>
    </footer>
  );
};

export default Footer;
