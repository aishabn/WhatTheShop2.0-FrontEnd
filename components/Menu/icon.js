import React from "react";
import { observer } from "mobx-react";

// Navigation
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, Icon } from "native-base";

//Store
// import CartStore from "../../stores/cartStore";

class MenuButton extends React.Component {
  navigate() {
    let route = this.props.route;
    this.props.navigation.navigate(route);
  }

  render() {
    return (
      <Button light transparent onPress={() => this.navigate()}>
        <Text>
          <Icon type="Feather" name="shopping-bag" />
        </Text>
      </Button>
    );
  }
}

export default withNavigation(observer(MenuButton));
