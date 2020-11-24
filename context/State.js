import React from "react";
import AuthContextProvider from "./AuthContext";

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
                children: kids
            }),
        children
    );
}

function ContextProvider({ children }) {
    return (
        <ProviderComposer
            contexts={[<AuthContextProvider />]}
        >
            {children}
        </ProviderComposer>
    );
}

export { ContextProvider };
