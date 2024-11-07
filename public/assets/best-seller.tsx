import React, { useRef, useState, useEffect } from 'react';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BestSellers } from 'src/components/book/BestSeller';
import { AspireIcons } from 'src/components/icon';
import bestSellerBooks from 'src/data/books';
import ChevronDown from '../../../../public/assets/iconsets/Arrow - Down Circle.svg';
import ArrowRight from '../../../../public/assets/iconsets/Arrow - Right.svg';

export const BestSeller: React.FC = () => {
  const theme = useTheme();
  const bigDevice = useMediaQuery(theme.breakpoints.up('sm'));
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [centerIndex, setCenterIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;

      const windowCenter = window.innerWidth / 2;

      const children = scrollContainer.children;
      let closestIndex: number | null = null;
      let closestDistance = Infinity;

      Array.from(children).forEach((child, index) => {
        const childElement = child as HTMLElement;
        const childRect = childElement.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2; // Center of the card

        const distance = Math.abs(windowCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    };

    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    handleScroll();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Grid
      container
      mt={14}
      sx={{
        background: bigDevice ? 'linear-gradient(to right, #ffffff 50%, #F3EDD7 50%)' : null,
      }}
    >
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ py: 4 }}>
            <Grid
              container
              sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}
            >
              <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={{ px: { xs: 2, md: 8 } }}>
                <Typography variant="h3" sx={{ marginTop: '41px' }}>
                  Best Seller Books
                </Typography>
              </Grid>

              {bigDevice && (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={2}
                  lg={2}
                  xl={2}
                  sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
                >
                  <Box
                    width={44}
                    height={44}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: -3,
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }}
                  >
                    <AspireIcons
                      icon={ChevronDown}
                      alt="Chevron down"
                      width={26}
                      height={26}
                      sx={{
                        aspectRatio: 1,
                      }}
                    />
                  </Box>
                </Grid>
              )}

              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
                xl={5}
                px={8}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: bigDevice ? 'flex-end' : 'flex-start',
                  px: { xs: 2, md: 8 },
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '44px',
                    backgroundColor: 'white',
                    px: 2,
                  }}
                  onClick={() => alert('see all books')}
                >
                  <Typography variant="body1" color="#5A5A5A">
                    See All
                  </Typography>
                  <AspireIcons
                    icon={ArrowRight}
                    alt="See all books"
                    width={18}
                    height={18}
                    sx={{
                      marginLeft: 4,
                      aspectRatio: 1,
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              gap="24px"
              ref={scrollRef}
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                alignItems: 'flex-end',
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                pb: 10,
                pt: 4,
              }}
            >
              {bestSellerBooks.map((book, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={2.5}
                  xl={2.5}
                  sx={{
                    transition: 'transform  0.3s ease-in-out',
                    transform: centerIndex === index ? 'scale(1.08)' : 'scale(1)',
                  }}
                >
                  <BestSellers
                    cover={book.bookCover}
                    title={book.bookTitle}
                    author={book.authorName}
                    onPress={() => alert('book clicked')}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
