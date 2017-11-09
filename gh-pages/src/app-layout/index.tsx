import { connectTeamsComponent, InjectedTeamsProps, Surface } from 'msteams-ui-components-react';
import * as React from 'react';
import * as styles from './styles';

interface AppLayoutProps {
  sidebar: React.ComponentType;
  main: React.ComponentType;
}

const AppLayoutInner: React.StatelessComponent<AppLayoutProps & InjectedTeamsProps> = (props) => {
  const { context } = props;
  const classes = styles.appLayout(context);
  return <Surface className={classes.container}>
    <div className={classes.sidebar}>
      <props.sidebar />
    </div>
    <div className={classes.main}>
      <props.main />
    </div>
  </Surface>;
};

export const AppLayout = connectTeamsComponent(AppLayoutInner);
