import React from "react";

interface Props {
  secID: string;
}

const Eachproduct = (props: Props) => {
  const features = [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    {
      name: "Material",
      description:
        "Solid walnut base with rare earth magnets and powder coated steel card cover",
    },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    {
      name: "Finish",
      description: "Hand sanded and finished with natural oil",
    },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    {
      name: "Considerations",
      description:
        "Made from natural materials. Grain and color vary with each item.",
    },
  ];
  return (
    <section
      id={props.secID}
      className="h-screen mbsecscroll overflow-y-scroll pt-8 pb-32 lg:pb-0"
    >
      <div>
        <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-400">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-indigo-600 pt-4"
                >
                  <dt className="font-medium text-white">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eachproduct;
