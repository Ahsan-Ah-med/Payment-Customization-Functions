// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  const configuration = JSON.parse(
    input?.paymentCustomization?.metafield?.value ?? "{}"
  );
  const getMethod = input?.paymentMethods.find(method => method.name.includes("Cash on Delivery"));
  // console.log(getMethod?.name)
  // console.log(getMethod?.id)
  const getTag = input?.cart?.buyerIdentity?.customer?.hasTags[0].hasTag
  // console.log(getTag)
  
  if (!getTag) {
    // console.log(`If condition = ${getTag}`)
    return NO_CHANGES;
  }
  if (!getMethod) {
    return NO_CHANGES;
  }

  return {
    operations: [
      {
        hide: {
          paymentMethodId: getMethod?.id
        }
      }
    ]
  };
};