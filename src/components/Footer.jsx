export default function Footer() {
  return (
    <footer className="mb-4 mt-24 flex flex-col gap-2.5 px-4">
      <div className="flex w-full justify-around [&_a]:text-black [&_a]:no-underline  [&_a]:hover:text-[#125ced]">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="mt-4 flex justify-center">
        <p>© 2026 DibiEdu. All rights reserved.</p>
      </div>
    </footer>
  );
}
