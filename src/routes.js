import React from "react";
import { Route } from "react-router";

import Home from "features/home/components/Home";
import Contact from "features/Contact";
import NotFound from "features/NotFound";
import Beer from "features/beer/components/beer";
import Wine from "features/wine/components/wine";
import Oil from "features/oil/components/oil";

export default (
  <Route>
    <Route path="/" component={Home} />
    <Route path="/beer" component={Beer} />
    <Route path="/wine" component={Wine} />
    <Route path="/oil" component={Oil} />
    <Route path="contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Route>
);
