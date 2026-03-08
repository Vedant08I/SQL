import java.util.HashSet;
import java.util.Set;

class Solution {
    public String findDifferentBinaryString(String[] nums) {
        int n = nums.length;
        Set<String> set = new HashSet<>();
        for (String num : nums) {
            set.add(num);
        }
        for (int i = 0; i < (1 << n); i++) {
            String binary = String.format("%" + n + "s", Integer.toBinaryString(i)).replace(' ', '0');
            if (!set.contains(binary)) {
                return binary;
            }
        }
        return "";
    }
}
