#include <string.h>
#include <stdio.h>

int	strleno(char *str);

int main() {
	char *s = "";
	printf("len of: '%s': %i\n", s, strleno(s));
	s = "sggdsdsg";
	printf("len of: '%s': %i\n", s, strleno(s));
	char s1[10] = "asdfsfg";
	s1[3] = 11;
	printf("len of: '%s': %i\n", s1, strleno(s1));
}