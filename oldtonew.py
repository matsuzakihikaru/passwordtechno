import cv2
import numpy as np

for i in range(4):
	for j in range(12):
		old_path = "old_images/%d/%d.png"%(i+1,j+1)
		new_path = "new_images/%d/%d.png"%(i+1,j+1)

		img = cv2.imread(old_path)
		for _ in range(20):
			img = np.insert(img, 128*2, 255, axis=0)
		for _ in range(20):
			img = np.insert(img, 128, 255, axis=0)

		for _ in range(20):
			img = np.insert(img, 128*2, 255, axis=1)
		for _ in range(20):
			img = np.insert(img, 128, 255, axis=1)

		cv2.imwrite(new_path, img)