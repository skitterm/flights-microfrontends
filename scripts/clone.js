const { rmdir, mkdir } = require("fs");
const { exec } = require("child_process");

const directory = process.argv[2];
if (!directory) {
  throw new Error("Please provide a directory");
}

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
            cwd: `./copy/flights-microfrontends/${directory}`,
          },
          () => {
            console.log(`DONE INSTALLING DEPENDENCIES TO ${directory}`);

            exec(
              "yarn deploy",
              {
                cwd: `./copy/flights-microfrontends/${directory}`,
              },
              () => {
                console.log(`DONE DEPLOYING TO ${directory}`);
              }
            );
          }
        );
      }
    );
  });
});
