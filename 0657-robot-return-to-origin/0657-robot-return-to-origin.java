class Solution {
    public boolean judgeCircle(String moves) {
        int[] dir = {0,0};
        for(char c: moves.toCharArray()) {
            if(c == 'L') {
                dir[0]++;
            } else if(c == 'R') {
                dir[0]--;
            } else if(c == 'U') {
                dir[1]++;
            } else {
                dir[1]--;
            }
        }
        return dir[0] == 0 && dir[1] == 0;
    }
}