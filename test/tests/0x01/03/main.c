#include <string.h>
#include <stdio.h>

int	strlen(char *str);

int main() {
	char *s = "";
	printf("len of: '%s': %i\n", s, strlen(s));
	s = "sggdsdsg";
	printf("len of: '%s': %i\n", s, strlen(s));
	char s1[10] = "asdfsfg";
	s1[3] = 11;
	printf("len of: '%s': %i\n", s1, strlen(s1));