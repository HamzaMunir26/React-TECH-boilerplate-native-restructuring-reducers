import { NavigationActions, StackActions } from "react-navigation";

const NavigateToBase = (navigation, routeName) => {
  const nav = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  });
  navigation.dispatch(nav);
};

export default NavigateToBase;