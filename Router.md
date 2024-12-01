# Browser Router :

History Management:
BrowserRouter manages the navigation history using the HTML5 History API (pushState and replaceState), allowing users to move between routes without reloading the page.

URL Synchronization:
It ensures that the URL in the browser reflects the current view or page of the application, enabling deep linking and bookmarking.

Parent Component for Routing:
It wraps the application's routing components (Route, Switch, etc.) to provide routing context and functionality.

Facilitates Navigation:
By wrapping the app with BrowserRouter, you can use features like <Link> and useNavigate for smooth navigation between pages.

import { BrowserRouter as Router } from 'react-router-dom';


Routes element is an upgrade of the previous Switch component in React Router v5. It includes features like relative routing and linking, automatic route ranking, nested routes, and layouts.

You
14:35
This new element is an upgrade of the previous Switch component in React Router v5. It includes features like relative routing and linking, automatic route ranking, nested routes, and layouts.
Kriti
15:03
const navigateTo = () => {
        navigate({
            pathname: "/about",
            search: createSearchParams({
                foo: "bar",
                bar: "foo",
            }).toString(),
        });
    };
Kriti
15:06
const navigateTo = () => {
        navigate({
            pathname: "/about",
            search: createSearchParams({
                foo: ["bar", id],
                bar: "foo",
            }).toString(),  // http://localhost:3000/about?foo=bar&foo=7&bar=foo
        });
    };
Kriti
15:10
const [searchParams, _] = useSearchParams();
    console.log("searchParams", searchParams.getAll("foo"));
    console.log("searchParams", searchParams.get("bar"));