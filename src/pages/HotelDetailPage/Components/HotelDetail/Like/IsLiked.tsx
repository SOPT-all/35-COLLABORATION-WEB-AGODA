import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { END_POINT } from "@utils/constants/api/api";
import { instance } from "@apis/instance";

import { HeartWrapper, EmptyHeart, FillHeart } from "./IsLiked.style";
import { Emptyheart, Fillheart } from "@assets/svg";

interface IsLikeProps {
  hotelId: number;
  isLiked: boolean;
}

const IsLiked = ({ hotelId, isLiked }: IsLikeProps) => {
  const [currentIsLiked, setCurrentIsLiked] = useState(isLiked);

  // 좋아요 상태 변경 API 호출
  const toggleLikeMutation = useMutation({
    mutationFn: async () => {
      const response = await instance.patch(
        END_POINT.PATCH_HOTEL_LIKE(hotelId, !currentIsLiked)
      );
      return response.data;
    },
    onSuccess: () => {
      setCurrentIsLiked((prev) => !prev);
    },
    onError: (error) => {
      console.error("좋아요 변경 실패:", error);
      alert("좋아요 상태 변경에 실패했습니다.");
    },
  });

  // 좋아요 버튼 클릭 이벤트 핸들러
  const handleToggleLike = () => {
    toggleLikeMutation.mutate();
  };

  return (
    <div css={HeartWrapper} onClick={handleToggleLike}>
      {currentIsLiked ? (
        <Fillheart css={FillHeart} />
      ) : (
        <Emptyheart css={EmptyHeart} />
      )}
    </div>
  );
};

export default IsLiked;