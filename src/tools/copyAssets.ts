import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/jitadmin/views", "out/jitadmin/views" );
shell.cp( "-R", "src/static", "out/" );
