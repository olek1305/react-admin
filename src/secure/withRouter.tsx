import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const withRouter = (Component: any) => {
    function ComponentWithRouterProp(props: any) {
        const params = useParams();
        const navigate = useNavigate();
        const location = useLocation();

        return <Component {...props} params={params} navigate={navigate} location={location} />;
    }

    return ComponentWithRouterProp;
};
