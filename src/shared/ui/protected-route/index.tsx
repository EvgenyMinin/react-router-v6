import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { APP_NAVIGATION } from '../../lib';

type OwnProps = {
  isAllowed: boolean;
  children: JSX.Element;
};

export const ProtectedRoute: FC<OwnProps> = ({
  isAllowed = false,
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={APP_NAVIGATION.home} replace />;
  }

  return children;
};
