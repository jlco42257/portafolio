const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-gray-400">jlco42257@gmail.com</p>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/jlco42257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.488.5.09.66-.217.66-.483 0-.237-.01-1.033-.014-1.876-2.782.605-3.368-1.348-3.368-1.348-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.068-.607.068-.607 1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.343 1.088 2.914.832.09-.647.35-1.086.637-1.335-2.22-.252-4.555-1.11-4.555-4.937 0-1.09.39-1.984 1.03-2.682-.103-.253-.447-1.273.098-2.653 0 0 .84-.27 2.75 1.025A9.598 9.598 0 0112 7.845c.85.004 1.705.114 2.506.334 1.91-1.296 2.75-1.025 2.75-1.025.546 1.38.202 2.4.1 2.653.64.698 1.03 1.592 1.03 2.682 0 3.835-2.337 4.682-4.565 4.93.36.31.682.927.682 1.867 0 1.347-.012 2.437-.012 2.772 0 .269.16.58.67.481A10.008 10.008 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/jose-cárdenas-902b0b23a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.793 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.69C4.18 7.69 3.25 6.75 3.25 5.62c0-1.13.93-2.07 2.06-2.07 1.13 0 2.06.94 2.06 2.07 0 1.13-.93 2.07-2.06 2.07zm15.15 12.762h-3.5V14.9c0-1.323-.026-3.026-1.845-3.026-1.845 0-2.128 1.442-2.128 2.934v5.645h-3.5V9h3.36v1.563h.05c.467-.88 1.605-1.806 3.305-1.806 3.534 0 4.184 2.328 4.184 5.353v6.342z" />
            </svg>
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} José Luis Cárdenas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
