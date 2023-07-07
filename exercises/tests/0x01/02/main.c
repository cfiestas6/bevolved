#include <string.h>
#include <stdio.h>
#include <unistd.h>

int	putstr(char *str);

int main() {
	putstr("");
	write(1, "--\n", 3);
	putstr("hola!\n");
	char s1[10] = "asdfsfg";
	s1[3] = 11;
	putstr(s1);
}