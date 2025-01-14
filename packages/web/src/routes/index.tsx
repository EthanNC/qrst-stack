import { FileRoute, RouteApi } from "@tanstack/react-router";
import { apiUtils } from "../utils/trpc";

export const Route = new FileRoute("/").createRoute({
  component: HomeComponent,
  loader: async () => {
    const res = await apiUtils.read.ensureData("bob");
    return {
      res,
    };
  },
});

const api = new RouteApi({ id: "/" });

function HomeComponent() {
  const { res } = api.useLoaderData();
  return (
    <div className="p-2">
      <h3>Welcome {}!</h3>
      <>
        <div className="container">
          <h2>SST Example</h2>
          <div>something here</div>
        </div>
      </>
    </div>
  );
}
