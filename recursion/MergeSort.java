package recursion;

import java.util.Arrays;

public class MergeSort {
  public static void main(String[] args) {
    int[] data = new int[] { -5, 20, 10, 3, 2, 0 };
    int[] result = mergeSort(data, 0, data.length - 1);
    System.out.println(Arrays.toString(result));
  }

  public static int[] mergeSort(int[] data, int start, int end) {
    if (start < end) {
      int mid = (start + end) / 2;
      mergeSort(data, start, mid);
      mergeSort(data, mid + 1, end);
      merge(data, start, mid, end);
    }
    return data;
  }

  public static void merge(int[] data, int start, int mid, int end) {
    // build temp array to avoid modifying the original contents
    int[] temp = new int[end - start + 1];

    int i = start, j = mid + 1, k = 0;

    // While both sub-array have values, then try and merge them in sorted order
    while (i <= mid && j <= end) {
      if (data[i] <= data[j]) {
        temp[k++] = data[i++];
      } else {
        temp[k++] = data[j++];
      }
    }

    // Add the rest of the values from the left sub-array into the result
    while (i <= mid) {
      temp[k++] = data[i++];
    }

    // Add the rest of the values from the right sub-array into the result
    while (j <= end) {
      temp[k++] = data[j++];
    }

    // Copy what is in temp and replace what is in data
    for (i = start; i <= end; i++) {
      data[i] = temp[i - start];
    }
  }
}
