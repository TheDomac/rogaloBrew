import React from "react";
import { Route } from "react-router";

import Home from "features/home/components/Home";
import Contact from "features/Contact";
import NotFound from "features/NotFound";

export default (
  <Route>
    <Route path="/" component={Home} />
    <Route path="contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Route>
);
