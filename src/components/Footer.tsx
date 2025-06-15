
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container py-6 text-center text-muted-foreground text-sm">
        <p>&copy; {currentYear} Aashish Bande. All rights reserved.</p>
        <p className="mt-2">STATUS: <span className="text-primary">OPERATIONAL</span></p>
      </div>
    </footer>
  );
};

export default Footer;
