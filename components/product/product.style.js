import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        padding: SIZES.xLarge,
        overflow: 'hidden',
        justifyContent: "space-between",
        rowGap: SIZES.medium,
        columnGap: SIZES.medium,
        borderRadius: SIZES.medium
      },
      loading: {
        color: COLORS.primary,
      },

  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
  detailsContainer: {
    display: 'flex',
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    flexDirection: 'column',
    columnGap: SIZES.medium,
  },
  between: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  button: {
    padding: SIZES.small,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
  },
  descriptionContainer: {
    padding: SIZES.xLarge,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    backgroundColor: COLORS.lightWhite
  },
  productName: {
    fontSize: SIZES.large, 
  }
});

export default styles;
