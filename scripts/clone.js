const { rmdir, mkdir } = require("fs");
const { exec } = require("child_process");

rmdir("./copy", () => {
  mkdir("./copy", () => {
    exec(
      "git clone https://github.com/skitterm/flights-microfrontends.git",
      {
        cwd: "./copy",
      },
      () => {
        console.log("DONE CLONING");

        exec(
          "yarn",
          {
            cwd: "./copy/flights-microfrontends/header",
          },
          () => {
            console.log("DONE INSTALLING DEPENDENCIES");

            exec(
              "yarn deploy",
              {
                cwd: "./copy/flights-microfrontends/header",
              },
              () => {
                console.log("DONE DEPLOYING");
              }
            );
          }
        );
      }
    );
  });
});
