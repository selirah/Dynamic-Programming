package recursion;

public class BinarySearch {
  public static void main(String[] args) {
    int[] arr = new int[] { -1, 0, 1, 2, 3, 4, 7, 9, 10, 20 };
    int result = binarySearch(arr, 0, 9, 10);
    System.out.println(result);
  }

  public static int binarySearch(int[] arr, int left, int right, int x) {
    if (left > right)
      return -1;

    int mid = (left + right) / 2;
    if (x == arr[mid])
      return mid;

    if (x < arr[mid])
      return binarySearch(arr, left, mid, x);

    return binarySearch(arr, mid + 1, right, x);
  }
}
