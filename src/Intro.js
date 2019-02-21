import React, { Component } from "react";
import { Animated, Button, Image, StyleSheet, Text, View } from "react-native";

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

class Intro extends Component {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>who cares?</Text>
        </View>
        <Animated.View // Special animatable View
          style={{
            ...this.props.style,
            opacity: fadeAnim // Bind opacity to animated value
          }}
        >
          {this.props.children}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default Intro;
