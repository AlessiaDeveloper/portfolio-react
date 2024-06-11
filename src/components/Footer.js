import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className=" rounded-lg shadow mx-3 mt-10"
        style={{ backgroundColor: "var(--rosetto)" }}
      >
        <div class="w-full mx-auto max-w-screen-xl p-2 md:p-4 md:flex md:items-center md:justify-between">
          <span
            className="text-sm xs:text-center"
            style={{ color: "var(--violone)" }}
          >
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Alessia Mori
            </a>
            . All Rights Reserved.
          </span>
          <ul
            class="flex flex-wrap items-center justify-center mt-3 text-sm font-medium sm:mt-0"
            style={{ color: "var(--violone)" }}
          >
            <li>
              <a href="#" class="hover:underline m-2 md:me-6">
                Playstore
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline m-2 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AlessiaDeveloper"
                class="hover:underline m-2 md:me-6"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alessia-mori-/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline m-2"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
