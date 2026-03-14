import java.util.*;

class Solution {
    public String getHappyString(int n, int k) {
        List<String> result = new ArrayList<>();
        generateHappyStrings(n, "", result);
        return k <= result.size() ? result.get(k - 1) : "";
    }
    
    private void generateHappyStrings(int n, String current, List<String> result) {
        if (current.length() == n) {
            result.add(current);
            return;
        }
        for (char c : new char[]{'a', 'b', 'c'}) {
            if (current.isEmpty() || current.charAt(current.length() - 1) != c) {
                generateHappyStrings(n, current + c, result);
            }
        }
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.getHappyString(1, 3)); // Output: "c"
        System.out.println(solution.getHappyString(1, 4)); // Output: ""
        System.out.println(solution.getHappyString(3, 9)); // Output: "cab"
    }
}
