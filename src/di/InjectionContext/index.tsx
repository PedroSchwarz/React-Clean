import React, { createContext } from "react";
import GetPosts from "../../features/posts/domain/usecases/GetPosts";
import buildPostsModule from "../PostsModuleInjection";

type InjectionContainer = {
    getPosts: GetPosts;
}

export const InjectionContext = createContext<InjectionContainer>({} as InjectionContainer);

const InjectionProvider: React.FC = ({ children }) => {
    const getPosts = buildPostsModule();

    return (
        <InjectionContext.Provider value={{ getPosts }}>
            {children}
        </InjectionContext.Provider>
    )
}

export default InjectionProvider;