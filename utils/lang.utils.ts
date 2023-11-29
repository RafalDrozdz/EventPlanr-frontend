export const parseLocalePath = (routeName: string, route: string) => {
  const splitRoute = routeName.split("___");
  return `/${splitRoute[1]}/${route}`;
};
