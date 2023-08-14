import { HomeIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs({ currentBreadcrumb, setBreadcrumbData }) {
  const pages = [
    {
      name: "Assignments",
      current: currentBreadcrumb === "" ? true : false,
    },
    {
      name: currentBreadcrumb,
      current: currentBreadcrumb === "" ? false : true,
    },
  ];

  const handleNavigation = (breadcrumbName) => {
    breadcrumbName === "Assignments" ? (
      setBreadcrumbData("")
    ) : (
      setBreadcrumbData(breadcrumbName)
    )
  }

  return (
    <div className="absolute top-24 w-11/12 pt-1">
      <div className="flex w-full justify-center" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <div className="text-gray-400">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </div>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <p
                  onClick={() => {
                    handleNavigation(page.name);
                  }}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-sky-700 cursor-pointer"
                  aria-current={page.current ? "page" : undefined}
                >
                  {page.name}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
