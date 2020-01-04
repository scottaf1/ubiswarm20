import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */
const useStyles = makeStyles(theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
}));

function PortalDoc(props)
{
    const classes = useStyles();
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Material UI Components</Typography>
                        </div>
                        <Typography variant="h6">Portal</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/portal"
                        target="_blank"
                        role="button"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Portal</Typography>
                    <Typography className="description">The portal component renders its children into a new "subtree" outside of current component hierarchy.</Typography>

                    <ul>
                        <li>📦 <a href="/size-snapshot">1.3 kB gzipped</a></li>
                    </ul>
                    <Typography className="mb-16" component="div">The children of the portal component will be appended to the <code>{`container`}</code> specified.
                        The component is used internally by the <a href="/components/modal/"><code>{`Modal`}</code></a> and <a href="/components/popper/"><code>{`Popper`}</code></a> components.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Example</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/portal/SimplePortal.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/portal/SimplePortal.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Server-side</Typography>
                    <Typography className="mb-16" component="div">React <a href="https://github.com/facebook/react/issues/13097">doesn&#39;t support</a> the <a href="https://reactjs.org/docs/portals.html"><code>{`createPortal()`}</code></a> API on the server.
                        You have to wait for the client-side hydration to see the children.</Typography>

                </div>
            }
        />

    );
}

export default PortalDoc;
