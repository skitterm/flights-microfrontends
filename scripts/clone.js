const { rmdir, mkdir } = require("fs");
const { exec } = require("child_process");

try {
  const directory = process.argv[2];
  if (!directory) {
    throw new Error("Please provide a directory");
  }

  const tag = process.argv[3];
  if (!tag) {
    throw new Error("Please provide a tag or commit hash");
  }

  rmdir("./../copy", () => {
    mkdir("./../copy", () => {
      exec(
        "git clone https://github.com/skitterm/flights-microfrontends.git",
        {
          cwd: "./../copy",
        },
        () => {
          console.log("DONE CLONING");

          exec(
            `git checkout ${tag}`,
            {
              cwd: "./../copy/flights-microfrontends",
            },
            () => {
              console.log(`DONE CHECKING OUT TAG/COMMIT ${tag}`);

              exec(
                "yarn",
                {
                  cwd: `./../copy/flights-microfrontends`,
                },
                () => {
                  console.log(`DONE INSTALLING GENERAL DEPENDENCIES`);

                  exec(
                    "yarn",
                    {
                      cwd: `./../copy/flights-microfrontends/${directory}`,
                    },
                    () => {
                      console.log(`DONE INSTALLING DIRECTORY DEPENDENCIES`);

                      exec(
                        "yarn deploy",
                        {
                          cwd: `./../copy/flights-microfrontends/${directory}`,
                        },
                        () => {
                          console.log(`DONE DEPLOYING TO ${directory}`);
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
} catch (err) {
  console.log(err);
}
