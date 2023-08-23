import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An Error Occured</h1>
                <p>Page not found!</p>
            </main>
        </>
    );
}

export default ErrorPage;
