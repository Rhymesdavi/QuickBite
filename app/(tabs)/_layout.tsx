import { Redirect, Slot } from "expo-router";

const _Layout = () => {
  const isAuthenticated = false

  if (!isAuthenticated) { <Redirect href="/sign-in" /> } else {<Redirect href="/index" />}
  return <Slot />;
};
export default _Layout;
