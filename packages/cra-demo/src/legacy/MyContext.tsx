import React from 'react';

type Theme = {
  foreground: string;
  background: string;
};

type Themes = {
  light: Theme;
  dark: Theme;
};

const themes: Themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// When React renders a component that subscribes to this Context object,
// the component will read the current context value from the closes
// matching Provider above it in th tree.
// The default value argument is only used when a component does not
// have a matching Provider above it in the tree.
// This default value can be helpful for testing components in isolation
// without wrapping them.
const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

type ButtonProps = {
  onClick: () => void;
  children?: string;
};

class ThemedButton extends React.Component<ButtonProps> {

  context!: React.ContextType<typeof ThemeContext>;

  render() {
    let props = this.props;
    let ctx = this.context;

    return (
      <button
        {...props}
        style={{backgroundColor: ctx.theme.background}}
      />
    );
  }
}
// contextType property on a class can be assigned a Context object
// created by React.createdContext().
// Using this property lets you consume the nearest current value of
// that Context type using this.context.
ThemedButton.contextType = ThemeContext;


class ThemeTogglerButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <button
            className='btn'
            onClick={toggleTheme}
            style={{backgroundColor: theme.background}}
          >
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  )
}

type ToolbarProps = {
  changeTheme: () => void;
};

class Toolbar extends React.Component<ToolbarProps> {

  render() {
    let changeTheme = this.props.changeTheme;

    return (
      <ThemedButton
        onClick={changeTheme}
      >
        Change Theme
      </ThemedButton>
    )
  }
}

type ThemeState = {
  theme: Theme;
};

export class ThemeApp extends React.Component<any, ThemeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark
        ? themes.light
        : themes.dark,
    }));
  }

  // Every context object comes with a Provider React component that
  // allows consuming components to subscribe to context changes.
  // One Provider can be connected to many consumers.
  // Providers can be neted to override values deeper within the tree.
  render() {
    return (
      <div>
        <ThemeContext.Provider 
          value={{
            theme: this.state.theme,
            toggleTheme: this.toggleTheme,
          }}
        >
          <Toolbar changeTheme={this.toggleTheme}/>
          <Content />
        </ThemeContext.Provider>
        <section>
          <ThemedButton onClick={() => {}}>
            No Provider
          </ThemedButton>
        </section>
      </div>
    );
  }
}
